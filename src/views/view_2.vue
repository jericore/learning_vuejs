<template>
  <div>
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

        <b-breadcrumb :items="items"></b-breadcrumb>
  			<b-card class="mt-3" header="Form Data Input">
	 			<b-form @submit="onSubmit" @reset="onReset" v-if="show">
		 				<b-form-group
			        		id="input-group-1"
			        		label="Email address:"
			        		label-for="input-1"
			        		description="We'll never share your email with anyone else."
			      		>

			      		<b-form-input
         					id="input-1"
          					v-model="form.email"
          					type="email"
          					required
          					placeholder="Enter email"
        				>
        				</b-form-input>
        				</b-form-group>

        				<b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        				<b-form-input
          						id="input-2"
         						v-model="form.name"
          						required
          						placeholder="Enter name"
        				></b-form-input>
      					</b-form-group>

      					<b-form-group id="input-group-3" label="Food:" label-for="input-3">
        				<b-form-select
          						id="input-3"
          						v-model="form.food"
          						:options="foods"
          						required
        				></b-form-select>
      					</b-form-group>

      					<b-form-group id="input-group-4">
        						<b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          						<b-form-checkbox value="me">Check me out baby</b-form-checkbox>
          						<b-form-checkbox value="that">Check that out</b-form-checkbox>
        				</b-form-checkbox-group>
      					</b-form-group>

                <b-button-group>
      					 <b-button type="submit" variant="primary">Submit</b-button>
      					 <b-button type="reset" variant="danger">Reset</b-button>
                </b-button-group>
      					<b-button pill @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
    			</b-form>
    		</b-card>
    				<b-card class="mt-3" header="Form Data Result">
      					<pre class="m-0">{{ form }}</pre>
    				</b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: [],
        },
        items : [
          {
            text : 'NavBar',
            to : '/'
          },
          {
            text : 'View 2',
            active : true
          }
        ],
          dismissSecs: 10,
          dismissCountDown: 0,
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        var vm = this;
        // alert('test');
        vm.dismissCountDown = vm.dismissSecs
        console.log(vm.dismissSecs);
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
