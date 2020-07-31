<template>
	<div id="app">
		<Navbar />
		<Modal />
		<div class="container">
			<BotsList v-if="getBotList.length" />
			<EmptyList v-else />
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex"

import Navbar from "@/components/Navbar"
import Modal from "@/components/Modal"
import BotsList from "@/components/BotsList"
import EmptyList from "@/components/EmptyList"

export default {
	components: {
		Navbar,
		Modal,
		BotsList,
		EmptyList,
	},
	computed: {
		...mapGetters(["getBotList"]),
	},
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
