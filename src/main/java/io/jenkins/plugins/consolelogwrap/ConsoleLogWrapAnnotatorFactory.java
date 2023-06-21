package io.jenkins.plugins.consolelogwrap;

import hudson.Extension;
import hudson.console.ConsoleAnnotator;
import hudson.console.ConsoleAnnotatorFactory;

/**
 * @author stefan.welsch@b-nova.com
 */
@Extension
public class ConsoleLogWrapAnnotatorFactory extends ConsoleAnnotatorFactory {

	@Override
	public ConsoleAnnotator newInstance(Object context) {
		return new ConsoleLogWrapAnnotator();
	}


}
