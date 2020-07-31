<template>
	<nav class="navbar navbar-light bg-light">
		<a class="navbar-brand logotype" href="#">
			<img
				:src="logo"
				class="d-inline-block align-top"
				alt="logotype"
				loading="lazy"
			/>
			<span>Bots manager</span>
		</a>
		<button
			type="button"
			class="btn btn-success add-bot-button d-flex align-items-center"
			@click="showAddBotModalHandler"
		>
			<img
				:src="plusIcon"
				class="d-inline-block align-top"
				alt="plus"
				loading="lazy"
			/>
			<span>Добавить</span>
		</button>
	</nav>
</template>

<script>
import logo from "@/assets/img/robot.svg"
import plusIcon from "@/assets/img/plus-solid.svg"

export default {
	data() {
		return {
			logo,
			plusIcon,
		}
	},
	methods: {
		showAddBotModalHandler: function() {
			this.$modal.show('add-bot-modal', false)
		}
	}
}
</script>

<style lang="scss">
.logotype {
	& img {
		width: 32px;
		height: 32px;
		margin-right: 8px;
	}

	& span {
		font-weight: 500;
		color: #768bea;
	}
}
.add-bot-button {
	& img {
		width: 16px;
		height: 16px;
		margin-right: 6px;
	}
}
</style>
