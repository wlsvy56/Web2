import React from "react";
import file from "./download/Distinguish_between_dogs_and_cats.zip";
import {Image} from "react-bootstrap";

const Distinguish_between_dogs_and_cats = () => {
    
  return (
    <div>
    <h2>개와 고양이 구별하기</h2>
    <p>
        spyder와 파이썬을 이용했습니다.
    </p>
    <pre>
        <code>
        #modelMake.py<br/>
        # -*- coding: utf-8 -*-<br/>
            import os<br/>
            import matplotlib.image as mpimg<br/>
            import matplotlib.pyplot as plt<br/>
            import tensorflow as tf<br/>
            from tensorflow.keras.optimizers import RMSprop<br/>
            from tensorflow.keras.preprocessing.image import ImageDataGenerator<br/>
            from keras.callbacks import Callback<br/>
            import matplotlib.pyplot as plt<br/>
            class myCallback(Callback):<br/>
                def on_epoch_end(self, epoch,logs={}):<br/>
                    if logs.get('loss')&gt;0.1:<br/>
                        print('\n Stop training')<br/>
                        self.model.stop_training=True<br/>
            callbacks=myCallback()<br/>
            base_dir = 'cats_and_dogs_filtered'<br/>
            train_dir = os.path.join(base_dir, 'train')<br/>
            validation_dir = os.path.join(base_dir, 'validation')<br/>
            # 훈련에 사용되는 고양이/개 이미지 경로<br/>
            train_cats_dir = os.path.join(train_dir, 'cats')<br/>
            train_dogs_dir = os.path.join(train_dir, 'dogs')<br/>
            print(train_cats_dir)<br/>
            print(train_dogs_dir)<br/>
            # 테스트에 사용되는 고양이/개 이미지 경로<br/>
            validation_cats_dir = os.path.join(validation_dir, 'cats')<br/>
            validation_dogs_dir = os.path.join(validation_dir, 'dogs')<br/>
            print(validation_cats_dir)<br/>
            print(validation_dogs_dir)<br/>
            train_cat_fnames = os.listdir( train_cats_dir )<br/>
            train_dog_fnames = os.listdir( train_dogs_dir )<br/>
            print(train_cat_fnames[:5])<br/>
            print(train_dog_fnames[:5])<br/>
            print('Total training cat images :', len(os.listdir(train_cats_dir)))<br/>
            print('Total training dog images :', len(os.listdir(train_dogs_dir)))<br/>
            print('Total validation cat images :', len(os.listdir(validation_cats_dir)))<br/>
            print('Total validation dog images :', len(os.listdir(validation_dogs_dir)))<br/>
            nrows, ncols = 4, 4<br/>
            pic_index = 0<br/>
            fig = plt.gcf()<br/>
            fig.set_size_inches(ncols*3, nrows*3)<br/>
            pic_index+=8<br/>
            next_cat_pix = [os.path.join(train_cats_dir, fname)<br/>
                            for fname in train_cat_fnames[ pic_index-8:pic_index]]<br/>

            next_dog_pix = [os.path.join(train_dogs_dir, fname)<br/>
                            for fname in train_dog_fnames[ pic_index-8:pic_index]]<br/>
            for i, img_path in enumerate(next_cat_pix+next_dog_pix):<br/>
            sp = plt.subplot(nrows, ncols, i + 1)<br/>
            sp.axis('Off')<br/>
            img = mpimg.imread(img_path)<br/>
            plt.imshow(img)<br/>
            plt.show()<br/>
            model = tf.keras.models.Sequential([<br/>
            tf.keras.layers.Conv2D(16, (3,3), activation='relu', input_shape=(150, 150, 3)),<br/>
            tf.keras.layers.MaxPooling2D(2,2),<br/>
            tf.keras.layers.Conv2D(32, (3,3), activation='relu'),<br/>
            tf.keras.layers.MaxPooling2D(2,2),<br/>
            tf.keras.layers.Conv2D(64, (3,3), activation='relu'),<br/>
            tf.keras.layers.MaxPooling2D(2,2),<br/>
            tf.keras.layers.Flatten(),<br/>
            tf.keras.layers.Dense(512, activation='relu'),<br/>
            tf.keras.layers.Dense(1, activation='sigmoid')<br/>
            ])<br/>
            model.summary()<br/>
            model.compile(optimizer=RMSprop(lr=0.001),<br/>
                        loss='binary_crossentropy',<br/>
                        metrics = ['accuracy'])<br/>
            train_datagen = ImageDataGenerator( rescale = 1.0/255. )<br/>
            test_datagen  = ImageDataGenerator( rescale = 1.0/255. )<br/>
            train_generator = train_datagen.flow_from_directory(train_dir,<br/>
                                                            batch_size=20,<br/>
                                                            class_mode='binary',<br/>
                                                            target_size=(150, 150))<br/>
            validation_generator =  test_datagen.flow_from_directory(validation_dir,<br/>
                                                                batch_size=20,<br/>
                                                                class_mode  = 'binary',<br/>
                                                                target_size = (150, 150))<br/>
            history = model.fit(train_generator,<br/>
                                validation_data=validation_generator,<br/>
                                steps_per_epoch=100,<br/>
                                epochs=100,<br/>
                                validation_steps=50,<br/>
                                callbacks=[callbacks])<br/>
            acc = history.history['accuracy']<br/>
            val_acc = history.history['val_accuracy']<br/>
            loss = history.history['loss']<br/>
            val_loss = history.history['val_loss']<br/>
            epochs = range(len(acc))<br/>
            plt.plot(epochs, acc, 'bo', label='Training accuracy')<br/>
            plt.plot(epochs, val_acc, 'b', label='Validation accuracy')<br/>
            plt.title('Training and validation accuracy')<br/>
            plt.legend()<br/>
            plt.figure()<br/>
            plt.plot(epochs, loss, 'go', label='Training Loss')<br/>
            plt.plot(epochs, val_loss, 'g', label='Validation Loss')<br/>
            plt.title('Training and validation loss')<br/>
            plt.legend()<br/>
            plt.show()<br/>
            model.save('model.h5')"<br/>
            </code>
        </pre>
        <p>
            위 코드로 폴더 cats_and_dogs_filtered에 있는 개와 고양이 사진들을 이용해 머신러닝 후 model.h5 파일을 만들어 줍니다.
        </p>
        <pre>
            <code>
            #test.py<br/>
            # -*- coding: utf-8 -*-<br/>
            import os<br/>
            import numpy as np<br/>
            from keras.models import load_model<br/>
            from keras.preprocessing import image<br/>
            import matplotlib.pyplot as plt<br/>
            test_image=os.listdir('test_image')<br/>
            model=load_model('model.h5')<br/>
            for fn in test_image:<br/>
            path='test_image/' + fn<br/>
            img=image.load_img(path, target_size=(150, 150))<br/>
            plt.imshow(img)<br/>
            plt.show()<br/>
            x=image.img_to_array(img)<br/>
            x=np.expand_dims(x, axis=0)<br/>
            images = np.vstack([x])<br/>
            classes = model.predict(images, batch_size=10)<br/>
            if classes[0]&gt;0:<br/>
                print(fn + " is a dog")<br/>
            else:<br/>
                print(fn + " is a cat")<br/>
                </code>
        </pre>
        <p>
            test.py로 폴더 test_image 안에 있는 개 또는 고양이 사진을 개인지 고양이인지 구별하는 지 확인합니다.
        </p>
        <Image src="./img/dog_and_cat1.JPG"/><br/>
        <p>
            test_image 안에 있는 1.jpg 고양이 사진을 고양이라고 출력하고 있습니다.
        </p>
        <a href={file} download>
      <button type="button">개와 고양이 구별하기 프로그램</button></a>
      </div>
  )
}

export default Distinguish_between_dogs_and_cats