import './tags/counter-label';
import './tags/event-button';

<riot-app>

	<div class='panel panel-default'>
		<div class='panel-heading'>
			<h3 class='panel-title'>{this.opts.framework}</h3>
		</div>
		<div class='panel-body'>
			<event-button
				event={increment}
				framework={this.opts.framework}
				display={'+'} />
			<event-button
				event={decrement}
				framework={this.opts.framework}
				display={'-'} />
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

		const actionCreators = this.opts.actionCreators;

		this.increment = (framework) => {
			store.dispatch(actionCreators.increment(framework));
		};

		this.decrement = (framework) => {
			store.dispatch(actionCreators.decrement(framework));
		};

	</script>

</riot-app>