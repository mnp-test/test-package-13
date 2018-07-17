import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import testPackage_13 from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof testPackage_13, 'function')
  },
  async 'calls package without error'() {
    await testPackage_13()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await testPackage_13({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T
