import { login } from './login'

describe('login', () => {

    it('Deve exibir um alerta com boas vindas', () => {

        const mockAlert = jest.fn()
        window.alert = mockAlert
        login()
        expect(mockAlert).toBeCalled()
    })
})
