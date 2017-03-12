(function() {
    'use strict';

    angular
        .module('cactusApp')
        .controller('LieuDeleteController',LieuDeleteController);

    LieuDeleteController.$inject = ['$uibModalInstance', 'entity', 'Lieu'];

    function LieuDeleteController($uibModalInstance, entity, Lieu) {
        var vm = this;

        vm.lieu = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Lieu.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
