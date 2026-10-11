# Implementation Plan: Website Content Cleanup

## Goals
- Clean up all occurrences of forbidden terms: "مرخص", "مصرح", "معتمد", "100%", "متابعة", "إشراف", "ضمان", "تضمن", "نضمن", "طوال العام", "نهائي".
- Fix "Other Cities" section in service pages.
- Ensure no accidental removal of "10 years tank warranty" or legitimate "guarantee of satisfaction/safety".

## Scope
- All files in `src/data/` (specifically `*CitiesContent.ts`, `cityServicesData.ts`, `servicesData.ts`).
- Any other files identified by `grep` in `src/`.

## Steps
1.  **Search & Identify**: Use `grep` to find all instances of forbidden terms across the `src` directory.
2.  **Edit**: Systematically apply content replacements using `multi_replace_file_content`.
3.  **Fix Logic**: Specifically update the "Other Cities" mapping logic.
4.  **Verify**: Perform final `grep` search for forbidden terms.
5.  **Build**: Run `npm run build` to ensure no build errors.

## Constraints
- NO changes to SEO canonicals, meta titles, meta descriptions, or URL structures.
- Do not remove legit warranties like the 10-year tank warranty.
- Maintain content quality (replace with normal service description).
