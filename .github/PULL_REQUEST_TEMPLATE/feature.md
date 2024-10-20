# New feature 🎉

> [!NOTE]  
> This is a friendly reminder of the steps needed to release this feature. Fill in the data in the next steps so that
> the reviewer can take care of the rest.

## Implemented features

Summary of the changes and the related issue if applicable.

- Added xyz
- Changed xyz
- Fixed xyz

## Breaking changes

N/A

## How has this been tested?

Instructions taken to test this out.

- [ ] Added "Test A" doing xyz
- [ ] Manually tested xyz

## Additional comments

N/A

---

## Checklist

**General**

- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] Created examples for the features
- [ ] Added storybook stories
- [ ] Code is covered fully within `__tests__`
- [ ] Separated types from logic to `xyz.types.ts`
- [ ] No errors / warnings in code, terminal and browser console
- [ ] Code has no linter errors and is formatted with prettier
- [ ] Every part is exported with `index.ts` and within the main entry-point

**Components**

- [ ] Does it support Server Side Rendering? (window/lifecycle)
- [ ] Added `__docs__` folder with documentation
- [ ] Linked documentation with `@docs` comment
- [ ] Linked component with `@kind` to appear in the right group in docs
- [ ] Styles are composed into for each component
- [ ] Class-names are passed to all of the sub-components
- [ ] `sx` prop is passed to all of the sub-components
- [ ] Used `wai-aria` for creation and interactions
- [ ] Each icon, text can be modified
- [ ] Tested all props
- [ ] Tested all interactions
- [ ] Tested all functionalities
- [ ] Added at least one SSR test

**Hooks**

- [ ] Does it support Server Side Rendering? (window/lifecycle)
- [ ] Handling of errors and loading states (if applicable)
- [ ] Provided `@example` comment(s) over hook for documentation
- [ ] Tested all props
- [ ] Tested all functionalities

**Bugs**

- [ ] Tested all reported bugs
- [ ] Tested bugs have the link to report resource (like github issue link)

**Other**

- [ ] Tested all props
- [ ] Tested all methods
- [ ] Tested all functionalities

---

### Reviewer responsibilities

- [ ] No commented-out code in the PR
- [ ] Naming of the PR uses semantic-release patterns (fix:|feature:|etc.)
- [ ] Files / Folders named with our guidelines
- [ ] Code structure looks right
- [ ] Code is readable and well designed
- [ ] We are not duplicating utils/constants/types from our packages
- [ ] No `eslit-ignore` or `ts-ignore`
- [ ] No render-props (focus on declarative components)
- [ ] No props drilling / props objects (where it's possible)
- [ ] Tests `describe` and `it` represent assertions in readable way
- [ ] Does not test some external logic (which we do not control)
- [ ] Types are not declared in the same file as logic
- [ ] Component is placed in the right group (elements|errors|feedback|menus|etc.)
- [ ] Maximum one big piece of logic in one file
- [ ] Provided comments to the logic
- [ ] Feedback implemented
