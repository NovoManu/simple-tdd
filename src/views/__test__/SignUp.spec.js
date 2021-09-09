import SignUp from '../SignUp'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('SignUp', () => {
  describe('Layout', () => {
    it('has title', () => {
      render(SignUp)
      const title = screen.queryByTestId('signup-title')
      expect(title.innerHTML).toEqual('Sign Up')
    })
    it('has username input', () => {
      render(SignUp)
      const input = screen.queryByTestId('input-username')
      expect(input).toBeInTheDocument()
    })
    it('has email input', () => {
      render(SignUp)
      const input = screen.queryByTestId('input-email')
      expect(input).toBeInTheDocument()
    })
    it('has password input', () => {
      render(SignUp)
      const input = screen.queryByTestId('input-password')
      expect(input).toBeInTheDocument()
    })
    it('has password confirmation input', () => {
      render(SignUp)
      const input = screen.queryByTestId('input-password-confirm')
      expect(input).toBeInTheDocument()
    })
    it('has password input type password', () => {
      render(SignUp)
      const input = screen.queryByTestId('input-password')
      expect(input.type).toBe('password')
    })
    it('has password input type password', () => {
      render(SignUp)
      const input = screen.queryByTestId('input-password-confirm')
      expect(input.type).toBe('password')
    })
    it('has submit button', () => {
      render(SignUp)
      const button = screen.queryByTestId('submit-button')
      expect(button).toBeInTheDocument()
    })
    it('has submit button disabled', () => {
      render(SignUp)
      const button = screen.queryByTestId('submit-button')
      expect(button).toBeDisabled()
    })
  })
  describe('user action', () => {
    it('has test in username', async () => {
      render(SignUp)
      const input = screen.queryByTestId('input-username')
      const name = 'Kyle'
      await userEvent.type(input, name)
      expect(input.value).toEqual(name)
    })
    it('has test in email', async () => {
      render(SignUp)
      const input = screen.queryByTestId('input-username')
      const email = 'kylethebest@gmail.com'
      await userEvent.type(input, email)
      expect(input.value).toEqual(email)
    })
    it('has submit button enambled if password and ps confirm are match', async () => {
      render(SignUp)
      const password = screen.queryByTestId('input-password')
      const passwordConfirm = screen.queryByTestId('input-password-confirm')
      const passWord = '123456'
      await userEvent.type(password, passWord)
      await userEvent.type(passwordConfirm, passWord)
      const button = screen.queryByTestId('submit-button')
      expect(button).toBeEnabled()
    })
  })
})
