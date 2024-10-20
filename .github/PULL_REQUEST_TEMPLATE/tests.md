# Tests 🧪

> [!NOTE]  
> This is a friendly reminder of the steps needed to release your changes. Fill in the data in the next steps so that
> the reviewer can take care of the rest.

## What has been tested

Summary of the changes and the related issue if applicable.

- Tested component xyz
- Covered function xyz

## How has this been tested?

Instructions taken to test this out.

- [ ] Added "Test A" doing xyz
- [ ] Manually tested xyz

## Additional comments

N/A

---

## Checklist

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
