<template>
	<div class="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 mt-4">
		<div class="col mb-4" v-for="item in getBotList" :key="item.name + Math.round(Math.random() * 10000)">
			<div class="card h-100">
				<div class="card-img">
					<img :src="item.image" class="card-img-top" :alt="item.name" />
				</div>
				<div class="card-body">
					<h5 class="card-title">{{ item.name }}</h5>
					<p class="card-text">
						{{ item.description }}
					</p>
					<time>{{ item.time }}</time>
					<div class="buttons-block d-flex justify-content-between">
						<button type="button" class="btn btn-primary mt-2" @click="showEditModal(item.id)">Изменить</button>
						<button type="button" class="btn btn-danger mt-2" @click="deleteBot(item.id)">Удалить</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
	methods: {
		...mapMutations(['deleteBot']),
		showEditModal: function(id) {
			this.$modal.show('add-bot-modal', {id, type: 'edit'})
		}
	},
	computed: {
		...mapGetters(['getBotList'])
	}
}
</script>

<style lang="scss" scoped>
.btn {
	display: block;
}
.card-text {
	max-height: 195px;
    overflow: hidden;
}
.card-img {
	height: 200px;
}
.card-img-top {
	height: 100%;
	object-fit: cover;
}
</style>
