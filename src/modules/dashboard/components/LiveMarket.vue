<template>
  <div>
    <h2 class="dashboard-header mb-5 mt-8">Recent Account History</h2>
    <div class="section-container mr-20">
      <table style="width:100%">
        <tr class="px-10">
          <th class="table-header pb-3">Date</th>
          <th class="table-header pb-3">Amount</th>
          <th class="table-header pb-3">Description</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="positive pb-2 pt-3">2024-05-01</th>
          <th class="table-data">$41,112.32</th>
          <th class="table-data">Monthly Payout</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="negative pb-2 pt-3">2024-04-01</th>
          <th class="table-data">$41,112.32</th>
          <th class="table-data">Monthly Payout</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="positive pb-2 pt-3">2024-03-01</th>
          <th class="table-data">$41,112.32</th>
          <th class="table-data">Monthly Payout</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="negative pb-2 pt-3">2024-02-01</th>
          <th class="table-data">$41,112.32</th>
          <th class="table-data">Monthly Payout</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="positive pb-2 pt-3">2024-01-03</th>
          <th class="table-data">$41,112.32</th>
          <th class="table-data">Monthly Payout</th>
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
  background: #00A4EF;
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
