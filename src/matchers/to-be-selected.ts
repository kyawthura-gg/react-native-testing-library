import { ReactTestInstance } from 'react-test-renderer';
import { matcherHint } from 'jest-matcher-utils';
import { getAccessibilitySelectedState } from '../helpers/accessiblity';
import { checkHostElement, formatElement } from './utils';

export function toBeSelected(
  this: jest.MatcherContext,
  element: ReactTestInstance
) {
  checkHostElement(element, toBeSelected, this);

  return {
    pass: getAccessibilitySelectedState(element),
    message: () => {
      const is = this.isNot ? 'is' : 'is not';
      return [
        matcherHint(`${this.isNot ? '.not' : ''}.toBeSelected`, 'element', ''),
        '',
        `Received element ${is} selected`,
        formatElement(element),
      ].join('\n');
    },
  };
}
