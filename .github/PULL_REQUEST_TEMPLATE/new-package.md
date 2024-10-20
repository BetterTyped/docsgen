# New package 📦

> [!NOTE]  
> This is a friendly reminder of the steps needed to release this package. Fill in the data in the next steps so that
> the reviewer can take care of the rest. **New packages can be added only by Code Owners**

## What this package is for?

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
- [ ] I have created manually tag on `main` branch with the package name and latest `@docsgen` version
- [ ] I have updated package names / scripts in the package.json
- [ ] I have added all local `@docsgen` dependencies into package.json
- [ ] I have added documentation for this package (updating menu items, descriptions and colors)
- [ ] I have prepared code examples and descriptions
- [ ] I have updated Readme.md files for package itself and for main project

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
