<template>
  <div>
    <h2 class="dashboard-header mb-5 mt-8">Recent Transactions</h2>
    <div class="section-container mr-20">
      <table style="width:100%">
        <tr class="px-10">
          <th class="table-header pb-3">Date</th>
          <th class="table-header pb-3">Amount</th>
          <th class="table-header pb-3">Description</th>
          <th class="table-header pb-3">Type</th>
          <th class="table-header pb-3">Category</th>
          <th class="table-header pb-3">Merchant</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="positive pb-2 pt-3">2024-05-01</th>
          <th class="table-data">$41,112.32</th>
          <th class="table-data">ATM Withdrawal</th>
          <th class="table-data">Debit</th>
          <th class="table-data">Withdrawal</th>
          <th class="table-data">ATM</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="negative pb-2 pt-3">2024-05-03</th>
          <th class="table-data">$200.00</th>
          <th class="table-data">Restaurant Dinner</th>
          <th class="table-data">Debit</th>
          <th class="table-data">Dining</th>
          <th class="table-data">Local Bistro</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="positive pb-2 pt-3">2024-05-05</th>
          <th class="table-data">$120.00</th>
          <th class="table-data">Utility Bill Payment</th>
          <th class="table-data">Debit</th>
          <th class="table-data">Utilities</th>
          <th class="table-data">Electric Company</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="negative pb-2 pt-3">2024-05-06</th>
          <th class="table-data">$25.00</th>
          <th class="table-data">Coffee Shop</th>
          <th class="table-data">Debit</th>
          <th class="table-data">Food & Drink</th>
          <th class="table-data">Starbucks</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="positive pb-2 pt-3">2024-05-07</th>
          <th class="table-data">$150.00</th>
          <th class="table-data">Clothing Store</th>
          <th class="table-data">Debit</th>
          <th class="table-data">Shopping</th>
          <th class="table-data">H&M</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="negative pb-2 pt-3">2024-05-08</th>
          <th class="table-data">$90.00</th>
          <th class="table-data">Concert Tickets</th>
          <th class="table-data">Debit</th>
          <th class="table-data">Entertainment</th>
          <th class="table-data">Ticketmaster</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="positive pb-2 pt-3">2024-05-09</th>
          <th class="table-data">$40.00</th>
          <th class="table-data">Movie Theater</th>
          <th class="table-data">Debit</th>
          <th class="table-data">Entertainment</th>
          <th class="table-data">AMC Theatres</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
hr {
  opacity: 0.2;
  border: 1px solid #ffffff;
}

.negative {
  color: #ff4444;
}

.table-data {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}

.positive {
  color: rgba(15, 249, 136, 1);
}

.section-container {
  background: #141534;
  border-radius: 5px;
  @apply py-8;
}

.table-header {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
}

.dashboard-header {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
}
</style>
