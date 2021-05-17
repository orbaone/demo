<template>
  <div>
    <h2 class="dashboard-header mb-5 mt-8">Live Market</h2>
    <div class="section-container mr-20">
      <table style="width:100%">
        <tr class="px-10">
          <th class="table-header pb-3">Cryptocurrency</th>
          <th class="table-header pb-3">Last Price</th>
          <th class="table-header pb-3">Buy Price</th>
          <th class="table-header pb-3">Sell Price</th>
          <th class="table-header pb-3">Lowest Price</th>
          <th class="table-header pb-3">Highest Price</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="positive pb-2 pt-3">Bitcoin</th>
          <th class="table-data">$41,112.32</th>
          <th class="table-data">$42,893.70</th>
          <th class="table-data">$42,810.42</th>
          <th class="table-data">$33,893.10</th>
          <th class="table-data">$66,498.10</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="negative pb-2 pt-3">Ethereum</th>
          <th class="table-data">$41,112.32</th>
          <th class="table-data ">$42,893.70</th>
          <th class="table-data">$42,810.42</th>
          <th class="table-data">$33,893.10</th>
          <th class="table-data">$66,498.10</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="negative pb-2 pt-3">Binance Coin</th>
          <th class="table-data">$41,112.32</th>
          <th class="table-data ">$42,893.70</th>
          <th class="table-data">$42,810.42</th>
          <th class="table-data">$33,893.10</th>
          <th class="table-data">$66,498.10</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="positive pb-2 pt-3">Cardano</th>
          <th class="table-data">$41,112.32</th>
          <th class="table-data ">$42,893.70</th>
          <th class="table-data">$42,810.42</th>
          <th class="table-data">$33,893.10</th>
          <th class="table-data">$66,498.10</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="negative pb-2 pt-3">Dogecoin</th>
          <th class="table-data">$41,112.32</th>
          <th class="table-data ">$42,893.70</th>
          <th class="table-data">$42,810.42</th>
          <th class="table-data">$33,893.10</th>
          <th class="table-data">$66,498.10</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="positive pb-2 pt-3">Tether</th>
          <th class="table-data">$41,112.32</th>
          <th class="table-data ">$42,893.70</th>
          <th class="table-data">$42,810.42</th>
          <th class="table-data">$33,893.10</th>
          <th class="table-data">$66,498.10</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="negative pb-2 pt-3">XRP</th>
          <th class="table-data">$41,112.32</th>
          <th class="table-data ">$42,893.70</th>
          <th class="table-data">$42,810.42</th>
          <th class="table-data">$33,893.10</th>
          <th class="table-data">$66,498.10</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="negative pb-2 pt-3">Polkadot</th>
          <th class="table-data">$41,112.32</th>
          <th class="table-data ">$42,893.70</th>
          <th class="table-data">$42,810.42</th>
          <th class="table-data">$33,893.10</th>
          <th class="table-data">$66,498.10</th>
        </tr>
        <tr>
          <th colspan="6"><hr class="" /></th>
        </tr>
        <tr>
          <th class="positive pb-2 pt-3">Internet Computer</th>
          <th class="table-data">$41,112.32</th>
          <th class="table-data ">$42,893.70</th>
          <th class="table-data">$42,810.42</th>
          <th class="table-data">$33,893.10</th>
          <th class="table-data">$66,498.10</th>
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
