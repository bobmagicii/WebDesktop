<?php

require(sprintf(
	'%s/vendor/autoload.php',
	dirname(__FILE__,4)
));

$Project = Nether\OneScript\Project::FromFile(sprintf(
	'%s/onescript.json',
	dirname(__FILE__,2)
));

$Project->Print = TRUE;
$Project->Build();