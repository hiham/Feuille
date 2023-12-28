<template>
  <div class="card-container">
    <div class="card-box">
      <div class="double-box">
        <div class="outer-box"></div>
        <div class="inner-box">
          <h2 class="card-title">Feuille</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.dashboard {
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 1200px;
  padding: 20px;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
}

.cards {
  display: flex;
  flex-direction: column;
  margin-right: 3%;
  width: 30%;
}

.card {
  margin-bottom: 10px;
}

.chart {
  height: 100%;
  margin-right: 1%;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.card-box {
  width: 300px;
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.double-box {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000080;
  color: #fff;
  border-radius: 5px;
  padding: 15%;
}

.card-title {
  font-size: 24px;
  margin: 0;
}
</style>
