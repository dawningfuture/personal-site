import { createAction, props } from '@ngrx/store';

export const CodePageSections = {
  PERSONAL_SITE: 'CODE_PAGE_PERSONAL_SITE_SECTION',
  COMING_SOON: 'CODE_PAGE_COMING_SOON_SECTION',
} as const;

export type CodePageSection =
  (typeof CodePageSections)[keyof typeof CodePageSections];

export const scrollToSection = createAction(
  '[Code Page] Scroll to Section',
  props<{ section: CodePageSection }>()
);
