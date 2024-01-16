# internal port

인터널 포트는 애플리케이션의 핵심 비즈니스로직, 유스케이스에 연결됩니다.

이 포트는 애플리케이션의 핵심 기능을 외부 세계에 노출하는 것입니다.

```tsx
interface IUserService {
  createUser(userData: UserData): Promise<User>;
  getUserById(userId: string): Promise<User>;
  updateUser(userId: string, newUserData: UserData): Promise<User>;
  deleteUser(userId: string): Promise<void>;
}

class UserData {
  username: string;
  email: string;
  // ... 기타 유저 데이터 필드
}

class User {
  id: string;
  username: string;
  email: string;
  // ... 기타 유저 정보 필드
}
```

내부 세계에 접근하는 인터페이스를 정의합니다.
