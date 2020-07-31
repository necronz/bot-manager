<template>
	<modal name="add-bot-modal" :height="'auto'" styles="padding: 25px 20px;" @before-open="openHandler" @before-close="closeHandler">
		<form>
			<div class="form-group">
				<label for="input-bot-name">Название</label>
				<input
					type="text"
					class="form-control"
					id="input-bot-name"
					v-model="name"
				/>
			</div>
			<div class="form-group">
				<label for="description-textarea">Описание</label>
				<textarea
					class="form-control"
					id="description-textarea"
					rows="3"
					v-model="description"
				></textarea>
			</div>
			<PictureInput
				ref="pictureInput"
				@change="onChangeImage"
				width="200"
				height="200"
				margin="16"
				accept="image/jpeg,image/png"
				size="10"
				buttonClass="btn btn-light"
				:customStrings="{
					change: 'Изменить фото',
					drag: 'Загрузите фото',
				}"
			>
			</PictureInput>
			<div class="form-group">
				<label for="input-bot-name">Дата</label>
				<date-picker v-model="time" type="datetime" :lang="datepickerLang" valueType="DD.MM.YYYY HH:mm:ss"></date-picker>
			</div>
			<button type="button" class="btn btn-success add-bot-btn" @click="saveBotHandler" :disabled="!enabledSaveButton">
				Сохранить
			</button>
		</form>
	</modal>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import PictureInput from "vue-picture-input"
import DatePicker from "vue2-datepicker"

import "vue2-datepicker/scss/index.scss"

export default {
	components: {
		PictureInput,
		DatePicker,
	},
	data() {
		return {
			id: null,
			name: null,
			description: null,
			image: null,
			time: null,
			modalType: 'add',
			datepickerLang: {
				formatLocale: {
					months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
					monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
					weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
					weekdaysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
					weekdaysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
					firstDayOfWeek: 1
				}
			},
		}
	},
	methods: {
		...mapMutations(['saveBotDataHandler', 'editBotDataHandler']),
		openHandler: function(payload) {
			if (payload.params.id) {
				const data = this.getBotList.find(item => item.id === payload.params.id)
				this.id = payload.params.id
				this.name = data.name
				this.description = data.description
				this.image = data.image
				this.time = data.time
				this.modalType = payload.params.type
			}
		},
		closeHandler: function(payload) {
			this.name = this.description = this.image = this.time = null
		},
		onChangeImage: function(image) {
			if (image) {
				this.image = image
			} else {
				console.log("FileReader API not supported: use the <form>!")
			}
		},
		saveBotHandler: function() {
			const botData = {
				id: this.id ? this.id : Math.round(Math.random() * 100000),
				name: this.name,
				description: this.description,
				image: this.image,
				time: this.time
			}
			if (this.modalType === 'edit') {
				this.editBotDataHandler(botData)
			} else {
				this.saveBotDataHandler(botData)
				this.$modal.hide('add-bot-modal')
				this.name = this.description = this.image = this.time = null
			}
		}
	},
	computed: {
		...mapGetters(['getBotList']),
		enabledSaveButton: function() {
			return this.name && this.description && this.image && this.time
		}
	}
}
</script>

<style lang="scss" scoped>
.mx-datepicker {
	width: 100%;
}
.add-bot-btn {
	margin: 16px auto 0;
	display: block;
}
</style>
