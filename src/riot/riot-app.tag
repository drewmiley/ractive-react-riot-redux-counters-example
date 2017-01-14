import './tags/counter-label';
import './tags/event-button';

<riot-app>

	<div class='panel panel-default'>
		<div class='panel-heading'>
			<h3 class='panel-title'>Riot</h3>
		</div>
		<div class='panel-body'>
			<event-button
				event={undefined}
				display={'Riot +'} />
			<event-button
				event={undefined}
				display={'Riot -'} />
		</div>
		<div class='panel-footer'>
            <div each={state.frameworkScores}>
            	<counter-label
            		label={name}
            		value={score} />
            </div>
		</div>
	</div>

	<script>

		let store = this.opts.store;

		this.state = store.getState().toJS();

		store.subscribe(() => {
			this.state = store.getState().toJS();
			this.update();
		});

	</script>

</riot-app>