<template>
	<div>
		<input
			type="text"
			placeholder="Введите текст..."
			:value="value"
			id="inputText"
			v-on="listeners"
		/>
	</div>
</template>
<script>
export default {
	props: {
		value: {
			type: String,
			default: "",
		},
	},
	computed: {
		listeners() {
			return {
				...this.$listeners,
				input: (event) => this.$emit("input", event.target.value),
			};
		},
	},
};
</script>
<style scoped>
#inputText {
	float: left;
	margin: 0.6em;
	padding: 0.6em;
	text-decoration: none;
	border-radius: 4px;
	border: solid 1px var(--blue);
	transition: 200ms;
	outline: none;
	color: #003a38;
	width: 40vw;
	font-size: 24px;
	background: var(--white);
}
#inputText:focus {
	box-shadow: 0px 0px 8px 0px var(--blue);
}
</style>
