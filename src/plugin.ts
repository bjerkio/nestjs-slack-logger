export * from './constants';
export * from './slack.module';
export * from './slack.service';

export type {
  SlackConfig,
  SlackApiOptions,
  SlackAsyncConfig,
  SlackConfigFactory,
  SlackGoogleOptions,
  SlackMultipleWebhooksOptions,
  SlackWebhookOptions,
  SlackStdoutOptions,
  SlackSyncConfig,
} from './types';

export type Channels = string;
