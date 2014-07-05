angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('Events', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var events = [
            { id: 0, name: 'Test Event 0' },
            { id: 1, name: 'Test Event 1' },
            { id: 2, name: 'Test Event 2' },
            { id: 3, name: 'Test Event 3' }
        ];

        return {
            all: function () {
                return events;
            },
            get: function (eventId) {
                // Simple index lookup
                return events[eventId];
            }
        }
    })

/**
 * A simple example service that returns some data.
 */
    .factory('Friends', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var friends = [
            { id: 0, name: 'Scruff McGruff' },
            { id: 1, name: 'G.I. Joe' },
            { id: 2, name: 'Miss Frizzle' },
            { id: 3, name: 'Ash Ketchum' }
        ];

        return {
            all: function () {
                return friends;
            },
            get: function (friendId) {
                // Simple index lookup
                return friends[friendId];
            }
        }
    });
