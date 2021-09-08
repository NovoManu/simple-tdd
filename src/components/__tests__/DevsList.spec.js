import DevsList from '../DevsList'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import '@testing-library/user-event'
import userEvent from '@testing-library/user-event'
import { devs } from '../../data'

describe('Test DevsList', () => {
  it('sets correct index', async () => {
    render(DevsList, { props: { devs } })
    const dev = screen.queryAllByTestId('dev-item')
    await userEvent.click(dev[0])
    const selectedIndex = screen.queryByTestId('selected-dev-index')
    expect(selectedIndex.innerHTML).toEqual("1")
  })
})
