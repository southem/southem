import * as Updates from 'expo-updates';

export class AppReloadService  {

  static reload = (): void => {
    Updates.checkForUpdateAsync()
      .then(async update => {
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      })
      .catch( error => {
        console.error(`Error fetching latest Expo update: ${error}`);
      });
  };
}
