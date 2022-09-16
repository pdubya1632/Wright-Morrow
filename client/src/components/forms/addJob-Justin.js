export default function AddItem() {
  return (
    <>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="name" />
          </div>
          <TextInput
            id="street"
            type="text"
            placeholder="street name"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="city" value="city" />
          </div>
          <TextInput
            id="city"
            type="text"
            placeholder="city"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="state" value="state" />
          </div>
          <TextInput
            id="state"
            type="text"
            placeholder="state"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="zip" value="zip" />
          </div>
          <TextInput id="zip" type="text" required={true} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="description" />
          </div>
          <TextInput
            id="description"
            type="text"
            placeholder="description"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="pickupDate" value="pickupDate" />
          </div>
          <TextInput id="pickupDate" type="text" required={true} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="cost" value="cost" />
          </div>
          <TextInput id="cost" type="text" required={true} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="invoice" value="invoice" />
          </div>
          <TextInput id="invoice" type="text" required={true} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="category" value="category" />
          </div>
          <TextInput id="category" type="text" required={true} />
        </div>
      </form>
    </>
  );
}
