# Bugfix 🐛

> [!NOTE]  
> This is a friendly reminder of the steps needed to release this fix. Fill in the data in the next steps so that the
> reviewer can take care of the rest.

## Implemented fixes

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
- [ ] Tested all reported bugs
- [ ] Tested bugs have the link to report resource (like github issue link)

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
- [ ] Code does not belong to `@docsgen/utils` or `@docsgen/types`
- [ ] Component is placed in the right group (elements|errors|feedback|menus|etc.)
- [ ] Provided comments to the logic
- [ ] Feedback implemented
