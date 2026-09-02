Modal for confirmations and short forms. Controlled by `open`; put actions in `footer`.

```jsx
<Dialog open={open} title="Dispatch crew?" description="Crew 2 will be notified by text." onClose={close}
  footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button>Dispatch</Button></>} />
```