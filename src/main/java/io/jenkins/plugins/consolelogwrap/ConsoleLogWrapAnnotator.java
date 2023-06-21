package io.jenkins.plugins.consolelogwrap;

import hudson.MarkupText;
import hudson.console.ConsoleAnnotator;

import javax.annotation.CheckForNull;
import javax.annotation.Nonnull;

/**
 * @author stefan.welsch@b-nova.com
 */
public class ConsoleLogWrapAnnotator extends ConsoleAnnotator {

	@CheckForNull
	@Override
	public ConsoleAnnotator annotate(@Nonnull Object context, @Nonnull MarkupText markupText) {
		return this;
	}
}
