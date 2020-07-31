<template>
	<div class="empty-block pt-5">
		<h2 class="empty-block__text">
			Ваш список пуст. Пожалуйста, добавьте бота.
		</h2>
		<div class="empty-block__illustration mt-5" ref="botIllustration"></div>
	</div>
</template>

<script>
import lottie from "lottie-web"

import EmptyAnimation from "@/assets/img/chat-bot.json"

export default {
	data() {
		return {
			EmptyAnimation,
		}
	},
	mounted() {
		lottie.loadAnimation({
			container: this.$refs.botIllustration,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: this.EmptyAnimation,
		})
	},
	destroyed() {
		lottie.destroy()
	},
}
</script>

<style lang="scss">
.empty-block {
	&__text {
		text-align: center;
	}
}
</style>
