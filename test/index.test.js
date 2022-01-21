const zbPages = require('..')

// TODO: Implement module test
test('zb_pages', () => {
  expect(zbPages('w')).toBe('w@zce.me')
  expect(zbPages('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  expect(() => zbPages(100)).toThrow('Expected a string, got number')
})
