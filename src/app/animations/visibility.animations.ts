import {
  animate,
  AnimationTransitionMetadata,
  style,
  transition,
} from '@angular/animations';

export const fadeInOnEnter = (
  animation: string = '1s ease-in'
): AnimationTransitionMetadata =>
  transition(':enter', [
    style({ opacity: 0 }),
    animate(animation, style({ opacity: 1 })),
  ]);

// NOTE: This animation absolutely positions its element so that it remains above
// newly rendered content. Ensure a relatively positoned element has been
// created to contain the animated element. The `zIndex` parameter can be used
// to ensure the animated element is above any other containing elements. It is
// defaulted to `2` to ensure it is above SidenavContent
export const fadeOutOnLeave = (
  animation: string = '500ms ease-out',
  zIndex = 2
): AnimationTransitionMetadata =>
  transition(':leave', [
    style({
      opacity: 1,
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      zIndex,
    }),
    animate(
      animation,
      style({
        opacity: 0,
      })
    ),
  ]);
