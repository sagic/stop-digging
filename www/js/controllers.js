angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {
    })

    .controller('EventsCtrl', function ($scope, Events) {
        $scope.events = Events.all();
    })


    .controller('EventDetailCtrl', function ($scope, $stateParams, Events) {
        $scope.event = Events.get($stateParams.eventId);
    })

    .controller('FriendsCtrl', function ($scope, Friends) {
        $scope.friends = Friends.all();
    })

    .controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('AccountCtrl', function ($scope) {
    });
