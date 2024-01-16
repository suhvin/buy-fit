# external

익스터널 포트는 외부의 액터나 시스템과의 인터페이스를 정의합니다.

```tsx
interface IDataRepository {
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<void>;
  update(userId: string, newUserData: UserData): Promise<User>;
  delete(userId: string): Promise<void>;
}
```

외부 세계인 데이터베이스에 요청을 보내거나 데이터를 수신하는 인터페이스를 정의합니다.

