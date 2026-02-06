---
name: nodejs-patterns
description: Node.js and backend framework best practices
triggers: [context, nodejs, nestjs, express, backend]
---

# Node.js Patterns Skill

> **Purpose**: Apply professional Node.js patterns for backend development

---

## Overview

This skill provides best practices for building scalable, maintainable Node.js applications.

---

## Project Structure

### NestJS Structure

```
src/
├── main.ts                    # Entry point
├── app.module.ts              # Root module
├── common/                    # Shared utilities
│   ├── decorators/
│   ├── filters/
│   ├── guards/
│   ├── interceptors/
│   └── pipes/
├── config/                    # Configuration
│   ├── database.config.ts
│   └── app.config.ts
└── domains/                   # Feature modules
    ├── users/
    │   ├── users.module.ts
    │   ├── users.controller.ts
    │   ├── users.service.ts
    │   ├── dto/
    │   └── entities/
    └── orders/
```

---

## Dependency Injection

```typescript
// Service
@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly emailService: EmailService,
  ) {}
}

// Controller
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  async getUser(@Param("id") id: string) {
    return this.userService.findById(id);
  }
}
```

---

## Error Handling

```typescript
// Custom Exception
export class UserNotFoundException extends NotFoundException {
  constructor(userId: string) {
    super(`User with ID ${userId} not found`);
  }
}

// Global Exception Filter
@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      statusCode: status,
      message: exception.message || "Internal server error",
      timestamp: new Date().toISOString(),
    });
  }
}
```

---

## Validation

```typescript
// DTO with class-validator
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[A-Z])(?=.*[0-9])/)
  password: string;

  @IsOptional()
  @IsString()
  name?: string;
}

// Controller with validation pipe
@Post()
@UsePipes(new ValidationPipe({ transform: true }))
async create(@Body() createUserDto: CreateUserDto) {
  return this.userService.create(createUserDto);
}
```

---

## Async Patterns

```typescript
// Async/Await
async function processOrders() {
  const orders = await Order.findAll({ where: { status: "pending" } });
  await Promise.all(orders.map((order) => processOrder(order)));
}

// Concurrent Limit
import pLimit from "p-limit";
const limit = pLimit(5); // Max 5 concurrent

await Promise.all(items.map((item) => limit(() => processItem(item))));
```

---

## Quick Reference

| Pattern     | Usage                     |
| :---------- | :------------------------ |
| Module      | Feature encapsulation     |
| Service     | Business logic            |
| Controller  | HTTP handling             |
| Repository  | Data access               |
| DTO         | Data transfer             |
| Guard       | Authorization             |
| Interceptor | Cross-cutting             |
| Pipe        | Transformation/Validation |
