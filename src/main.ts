import * as s1 from './square1';
import * as s2 from './square2';
import ms from 'ms';


export function myFunction() {
    ms('2017/8/19 15:58:49');
    s2.square2('');
    return s1.square1('Hi');
}