angular.module('DesafioFrontend', [])
    .controller('DesafioFrontendController', function ($scope, $http) {

        // Chamando a lista de usuários.
        $http.get('http://localhost:8080/api/v1/user')
            .then(function (response) {
                $scope.users = response.data;
            })
            .catch(function (error) {
                console.error('Erro na chamada da API:', error);
            });

        // Cadastrando um novo usuário.
        $scope.formData = {};
        $scope.submitForm = function () {
            $http.post('http://localhost:8080/api/v1/user', $scope.formData)
                .then(function (response) {
                    console.log('Resposta da API:', response.data);
                })
                .catch(function (error) {
                    console.error('Erro na chamada da API:', error);
                });
        };

        // Retorna a classe de estilo para cada status da senha
        $scope.getPasswordSecurityLevel = function (passwordSecurityLevel) {
            switch (passwordSecurityLevel) {
                case 'VERY_WEAK':
                    return 'user-password-security-level-very-weak';
                case 'WEAK':
                    return 'user-password-security-level-weak';
                case 'GOOD':
                    return 'user-password-security-level-good';
                case 'STRONG':
                    return 'user-password-security-level-strong';
                case 'VERY_STRONG':
                    return 'user-password-security-level-very-strong';
                default:
                    return 'classe-padrao';
            }
        };

        // Obtém a descricao do status da Senha
        $scope.getPasswordSecurityLevelDescription = function (passwordSecurityLevel) {
            switch (passwordSecurityLevel) {
                case 'VERY_WEAK':
                    return 'Muito Fraca';
                case 'WEAK':
                    return 'Fraca';
                case 'GOOD':
                    return 'Boa';
                case 'STRONG':
                    return 'Forte';
                case 'VERY_STRONG':
                    return 'Muito Forte';
                default:
                    return '';
            }
        };

    });
