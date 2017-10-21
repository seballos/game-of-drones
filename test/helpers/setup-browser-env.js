import browserEnv from 'browser-env'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
browserEnv()

// eslint-disable-next-line
global.__VERSION_MAJOR__ = 1
