import AuthenticateUserService from './AuthenticateUserService';

describe('Authenticate user', () => {
  it('Deve ser possível autenticar um usuário', async () => {
    // vai chamar o serviço
    const authenticateUserService = new AuthenticateUserService();

    const authenticateUser = await authenticateUserService.execute({
      email: 'test',
      password: 'test@gmail.com',
    });

    console.log('authenticateUser', authenticateUser);

    expect(authenticateUser?.user).toHaveProperty('id');
  });
});
