import {
  animateChild,
  AnimationTransitionMetadata,
  query,
  transition,
} from '@angular/animations';

export const animateChildrenOnLeave = (
  queryExp: string = '@*'
): AnimationTransitionMetadata => {
  return transition(':leave', [
    query(queryExp, [animateChild()], { optional: true }),
  ]);
};
