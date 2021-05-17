<template>
  <div class="dark-background pb-10">
    <div class="flex">
      <dashboard-sidebar class="" />
      <div class="mx-10" style="flex-grow: 100">
        <div class="flex justify-between items-center py-8">
          <div class="flex input-with-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 21L16.65 16.65"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <input
              class="ml-5"
              type="text"
              placeholder="Search cryptocurrency"
            />
          </div>
          <div class="flex items-center">
            <svg
              class="ml-8 mr-5"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 9.33331C21 7.4768 20.2625 5.69632 18.9497 4.38357C17.637 3.07081 15.8565 2.33331 14 2.33331C12.1435 2.33331 10.363 3.07081 9.05025 4.38357C7.7375 5.69632 7 7.4768 7 9.33331C7 17.5 3.5 19.8333 3.5 19.8333H24.5C24.5 19.8333 21 17.5 21 9.33331Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.0184 24.5C15.8132 24.8536 15.5188 25.1471 15.1646 25.3511C14.8104 25.5551 14.4088 25.6625 14 25.6625C13.5912 25.6625 13.1896 25.5551 12.8354 25.3511C12.4812 25.1471 12.1868 24.8536 11.9817 24.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <img
              class="user-pic mx-5"
              src="@/assets/images/user-pic.png"
              alt="Profile Picture Placeholder"
            />
            <div class="user-name mr-5">Amy Brown</div>
            <button @click="this.logout">
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <h2 class="dashboard-header mb-5">Portfolio Analytics</h2>
        <div class="verify-container flex flex-col items-center justify-center">
          <p class="analytics-header">
            It seems you haven’t verified your identity yet
          </p>
          <p class="max-w-lg text-center mt-2 mb-5 analytics-paragraph">
            To start trading we first need to verify your indentity. Please
            click the button below to get your indentity verifcation process
            started.
          </p>
          <button id="verify-me" class="btn-primary">
            Verify My Indentity
          </button>
        </div>
        <div class="flex">
          <div class="w-4/5">
            <h2 class="dashboard-header mb-5 mt-8">Live Market</h2>
          </div>
          <div class="w-1/5">
            <h2 class="dashboard-header mb-5 mt-8">News</h2>
            <div class="news-container mt-2">
              <div class="news-item px-5">
                <div class="flex items-center">
                  <img
                    class="coin-icon"
                    src="@/assets/images/bitcoin.png"
                    alt="Bitcoin Icon"
                  />
                  <p class="news-text ml-3">Bitcoin</p>
                </div>
                <div class="flex">
                  <p class="news-text mt-2">
                    Welcome to Orba's own fake crypto exchange company demo.
                    This shows what Orba One's integration.
                  </p>
                  <svg
                    width="15"
                    height="20"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <hr class="my-5" />
              <div class="news-item px-5">
                <div class="flex items-center">
                  <img
                    class="coin-icon"
                    src="@/assets/images/eth.png"
                    alt="Ethereum Icon"
                  />
                  <p class="news-text ml-3">Etherenum</p>
                </div>
                <div class="flex">
                  <p class="news-text mt-2">
                    Welcome to Orba's own fake crypto exchange company demo.
                    This shows what Orba One's integration.
                  </p>
                  <svg
                    width="15"
                    height="20"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <hr class="my-5" />
              <div class="news-item px-5">
                <div class="flex items-center">
                  <img
                    class="coin-icon"
                    src="@/assets/images/dogecoin.png"
                    alt="Ethereum Icon"
                  />
                  <p class="news-text ml-3">Dogecoin</p>
                </div>
                <div class="flex">
                  <p class="news-text mt-2">
                    Welcome to Orba's own fake crypto exchange company demo.
                    This shows what Orba One's integration.
                  </p>
                  <svg
                    width="15"
                    height="20"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <hr class="my-5" />
              <a href="" class="text-center mt-5 secondary-pink-text">
                <p class="text-center">See latest news</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import localforage from "localforage";
import { renderButton } from "@/web-sdk-lib/lib";
import DashboardSidebar from "@/modules/dashboard/components/DashboardSidebar";

export default {
  components: {
    "dashboard-sidebar": DashboardSidebar
  },
  data() {
    return {
      applicantId: ""
    };
  },
  async beforeCreate() {
    const applicantId = await localforage.getItem("applicantId");
    const firstName = await localforage.getItem("firstName");
    const lastName = await localforage.getItem("lastName");
    if (!applicantId) {
      if (firstName && lastName) {
        try {
          const result = await fetch("/api/createApplicant", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              firstName,
              middleName: "",
              lastName
            })
          });
          const json = await result.json();
          if (json.data) {
            const { id: applicantId } = json.data;
            renderButton({
              apiKey: `${process.env.VUE_APP_API_KEY}`,
              applicantId: `${applicantId}`,
              disableStyle: true,
              target: "#verify-me",
              onCancelled: data => {
                console.log(data);
              },
              onSuccess: data => {
                console.log(data);
              },
              onError: err => {
                console.log(err);
              },
              steps: ["welcome", "selfie", "document", "finish"]
            });
            await localforage.setItem("applicantId", applicantId);
          } else {
            this.error = "Applicant could not be created :(";
          }
        } catch (error) {
          this.error = "Applicant could not be created";
        }
      }
    }
  },
  methods: {
    async logout() {
      await localforage.setItem("isAuthenticated", false);
      window.location.reload();
    }
  }
};
</script>
<style scoped>
.secondary-pink-text {
  color: rgba(255, 60, 116, 1);
}

hr {
  opacity: 0.2;
  border: 1px solid #ffffff;
}

.news-text {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}

.coin-icon {
  height: 24px;
  width: 24px;
}

.news-text {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}

.news-container {
  background: #141534;
  border-radius: 5px;
  @apply py-5;
}

.analytics-header {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
}

.analytics-paragraph {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 120%;
  color: #ffffff;
}

.user-pic {
  height: 28px;
  width: 28px;
  object-fit: contain;
  border-radius: 5px;
}

.verify-container {
  background: #141534;
  border-radius: 5px;
  @apply py-20;
}

.dashboard-header {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
}

.dark-background {
  background-color: rgba(17, 18, 44, 1);
  background-size: cover;
}

.input-with-icon {
  background: #0f1024;
  border-radius: 10px;
  padding: 12px 60px 12px 20px;
  flex-grow: 100;
}

.user-name {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}

input {
  color: white;
  background: none;
  width: 100%;
}
</style>
