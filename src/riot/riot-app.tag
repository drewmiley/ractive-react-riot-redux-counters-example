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
			<counter-label
				label={'Ractive'}
				value={0} />
			<counter-label
				label={'React'}
				value={0} />
			<counter-label
				label={'Riot'}
				value={0} />
		</div>
	</div>

	<script>

	</script>

</riot-app>