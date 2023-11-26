-- migrate:up
CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
);

-- migrate:down
DROP TABLE `users`;
