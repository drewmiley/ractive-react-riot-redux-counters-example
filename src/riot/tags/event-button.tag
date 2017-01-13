<event-button>

	<button
		class='btn btn-default'
		onclick={click}>
		{this.opts.display}
	</button>

	<script>

		this.click = () => {
			console.log(this.opts.display);
		};

	</script>

</event-button>