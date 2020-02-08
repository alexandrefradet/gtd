import { animate, animation, query, stagger, style, transition, trigger, useAnimation } from '@angular/animations';

export const enterAnimation = animation([
  // Initial state
  style({
    height: 0,
    opacity: 0,
    transform: 'scale(0.85)',
    'margin-bottom': 0,

    // Expand out the padding
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0
  }),
  // We first want to animate the spacing (height and margin)
  animate('50ms', style({
    // Wildcard meaning : the height of the element
    height: '*',
    'margin-bottom': '*',
    paddingTop: '*',
    paddingBottom: '*',
    paddingRight: '*',
    paddingLeft: '*'
  })),
  animate(68)
]);

export const leaveAnimation = animation([        // first scale up
  animate('50ms', style({
    transform: 'scale(1.05)'
  })),
  // then scale down to normal size while beginning to fade down
  animate('50ms', style({
    transform: 'scale(1)',
    opacity: 0.75
  })),
  // scale down and fade out
  animate('120ms ease-out', style({
    transform: 'scale(0.68)',
    opacity: 0
  })),
  // then animate the spacing (which includes height, margin and width)
  animate('150ms ease-out', style({
    opacity: 0,
    height: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0,
    'margin-bottom': '0',
  }))
]);

export const cardAnimation = [
  trigger('itemAnim', [
    // ENTRY (not existing in the dom to any state)
    transition('void => *', [
      useAnimation(enterAnimation)
    ]),

    // LEAVING (from any state to not existing)
    transition('* => void', [
      useAnimation((leaveAnimation))
    ])
  ]),
  trigger('listAnim', [
    transition('* => *', [
      query(':enter', [
          style({
            opacity: 0,
            height: 0
          }),
          stagger(100, [
            animate('0.2s ease')
          ])
        ], {
          optional: true
        }
      )
    ])
  ])
];
