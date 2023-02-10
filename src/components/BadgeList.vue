<template>
  <section>
    <h2>Kolkata themed bengali t-shirt</h2>
    <img src="../../public/imgs/T-shert.jpg" class="img-fluid" />
    <p>Rubber Print Comfortable round neck cotton T-shirts | Regular Fit</p>
    <p><strong class="price">Price:</strong> $ 99</p>
    <ul>
      <li>
        <base-badge type="add" caption="Add"></base-badge>
      </li>
      <li>
        <base-badge type="bay" caption="Bay"></base-badge>
      </li>
    </ul>
  </section>
</template>

<style>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
.price{
  color:red;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>
