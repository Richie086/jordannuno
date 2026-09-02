One-of-many choice; wrap in RadioGroup for the legend and 12px spacing.

```jsx
<RadioGroup label="How often?">
  <Radio name="freq" value="weekly" label="Weekly" checked onChange={() => {}} />
  <Radio name="freq" value="biweekly" label="Every other week" onChange={() => {}} />
</RadioGroup>
```